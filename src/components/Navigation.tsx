import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="Espetinho do Mineiro" className="h-16 w-auto" />
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#inicio" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
              Início
            </a>
            <a href="#cardapio" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
              Cardápio
            </a>
            <a href="#sobre" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
              Contato
            </a>
            
            <Button 
              size="default"
              variant="hero"
              asChild
              className="shadow-glow-orange"
            >
              <a 
                href="https://wa.me/5531987520571?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vim%20pelo%20site%2C%20gostaria%20de%20pedir%20um%20lanche" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                PEDIR PELO WHATSAPP
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
