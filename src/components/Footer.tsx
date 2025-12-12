import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Espetinho do Mineiro" className="h-16 w-auto" />
          </div>

          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2024 Espetinho do Mineiro - Todos os direitos reservados.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-smooth">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
