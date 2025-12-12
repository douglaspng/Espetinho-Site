import { Button } from "@/components/ui/button";
import heroBurger from "@/assets/hero-sandwich.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-start justify-start overflow-hidden pt-40"
      style={{
        backgroundImage: `url(${heroBurger})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 py-16 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-secondary block mb-3">ACENDE A FOME!</span>
          <span className="text-white">O SABOR QUE ILUMINA O SEU DIA.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
          No Espetinho do Mineiro, cada mordida é uma explosão de energia. Ingredientes frescos e receitas ousadas para a experiência mais saborosa da sua rotina.
        </p>
        
        <Button 
          size="xl"
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
            PEDIR PELO WHATSAPP
          </a>
        </Button>
      </div>

      {/* Decorative flame effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
