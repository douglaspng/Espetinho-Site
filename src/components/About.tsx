import { Flame, Sun, Sparkles } from "lucide-react";
import espetinhoGrill from "@/assets/espetinho-grill.jpg";
import espetinhoSmoker from "@/assets/espetinho-smoker.jpg";
import sanduicheGourmet from "@/assets/sanduiche-gourmet.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">NOSSA ESSÊNCIA</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              A CHAMA QUE NOS MOVE
            </h3>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              O Espetinho do Mineiro nasceu da paixão por sabores intensos e momentos bem vividos. Nossa identidade laranja traz a energia, a criatividade e o sabor que colocamos em cada lanche. O amarelo representa a alegria, o sol e a luz que queremos trazer para o seu dia. E o preto é a nossa base: a sophistication, a qualidade e o estilo que definem quem somos.
            </p>

            {/* Galeria de Fotos */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={espetinhoGrill} alt="Espetinhos na grelha" className="w-full h-64 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={espetinhoSmoker} alt="Espetinhos no defumador" className="w-full h-64 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={sanduicheGourmet} alt="Sanduíche gourmet" className="w-full h-64 object-cover" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-muted/50 rounded-xl border border-primary/20 hover:border-primary/50 transition-smooth">
                <Flame className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-primary mb-2">ENERGIA</h4>
                <p className="text-sm text-muted-foreground">Paixão e criatividade em cada receita</p>
              </div>

              <div className="text-center p-6 bg-muted/50 rounded-xl border border-secondary/20 hover:border-secondary/50 transition-smooth">
                <Sun className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h4 className="font-bold text-secondary mb-2">ALEGRIA</h4>
                <p className="text-sm text-muted-foreground">Sabores que iluminam o seu dia</p>
              </div>

              <div className="text-center p-6 bg-muted/50 rounded-xl border border-foreground/20 hover:border-foreground/50 transition-smooth">
                <Sparkles className="w-12 h-12 text-foreground mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">SOFISTICAÇÃO</h4>
                <p className="text-sm text-muted-foreground">Qualidade premium em cada detalhe</p>
              </div>
            </div>

            <p className="text-xl font-bold text-center text-gradient-primary mb-6">
              Mais do que uma lanchonete, somos o ponto de encontro para quem tem fome de vida.
            </p>

            <div className="text-center mt-8 p-6 bg-primary/10 rounded-xl border border-primary/30">
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Venha sentir o sabor autêntico!
              </p>
              <p className="text-lg text-foreground/80">
                Te esperamos com espetinhos na brasa e aquele atendimento mineiro de verdade!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
