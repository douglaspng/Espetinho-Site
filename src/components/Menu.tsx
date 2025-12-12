const Menu = () => {
  const espetos = [
    { name: "CARNE", price: "R$ 9,00" },
    { name: "CORAÇÃO", price: "R$ 9,00" },
    { name: "FRANGO", price: "R$ 9,00" },
    { name: "LINGUIÇA", price: "R$ 9,00" },
    { name: "LINGUIÇA APIMENTADA", price: "R$ 10,00" },
    { name: "MISTO", price: "R$ 9,00" },
    { name: "PANCETA", price: "R$ 9,00" },
    { name: "PÃO DE ALHO", price: "R$ 8,00" },
    { name: "QUEIJO", price: "R$ 8,00" },
    { name: "TULIPA", price: "R$ 9,00" },
    { name: "LANCHA C/ VINAGRETE", price: "R$ 16,00" },
    { name: "LANCHA (C) VINAGRETE ROSTADO RECHEADO", price: "R$ 16,00" },
    { name: "VINAGRETE E POLPAÇÃO", price: "R$ 3,00" },
    { name: "KAFTA", price: "R$ 9,00" },
    { name: "KAFTA APIMENTADA", price: "R$ 9,00" },
    { name: "KAFTA ALHO C/ QUEIJO", price: "R$ 13,00" },
    { name: "KAFTA CALABRESA C/ QUEIJO", price: "R$ 13,00" },
    { name: "KAFTA CARNE SECA C/ QUEIJO", price: "R$ 13,00" },
    { name: "KAFTA C/ CHEDDAR", price: "R$ 13,00" },
    { name: "KAFTA C/ PROVOLONE", price: "R$ 13,00" },
    { name: "KAFTA COM QUEIJO", price: "R$ 13,00" },
    { name: "MEDALHÃO DE FRANGO", price: "R$ 11,00" },
    { name: "MEDALHÃO DE KAFTA", price: "R$ 11,00" },
    { name: "PORÇÃO FAROFA VIAGEM", price: "R$ 1,00" },
  ];

  const bebidas = [
    { name: "COCA COLA", price: "R$ 6,00" },
    { name: "COCA COLA ZERO", price: "R$ 6,00" },
    { name: "COCA COLA 600ml", price: "R$ 8,00" },
    { name: "GUARANÁ", price: "R$ 6,00" },
    { name: "SODA", price: "R$ 6,00" },
    { name: "SCHWEPPES CITRUS", price: "R$ 6,00" },
    { name: "H2O", price: "R$ 8,00" },
    { name: "SUCOS", price: "R$ 7,00" },
    { name: "CORONA (LONG NECK)", price: "R$ 11,00" },
    { name: "BRAHMA DUPLO MALTE", price: "R$ 7,00" },
    { name: "HEINEKEN (LONG NECK)", price: "R$ 10,00" },
    { name: "BUDWEISER (LONG NECK)", price: "R$ 10,00" },
    { name: "STELLA (LONG NECK)", price: "R$ 10,00" },
    { name: "AMSTEL", price: "R$ 6,00" },
    { name: "SKOL", price: "R$ 6,00" },
    { name: "SMIRNOFF ICE", price: "R$ 12,00" },
    { name: "SKOL BEATS", price: "R$ 12,00" },
  ];

  return (
    <section id="cardapio" className="py-16 bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient-primary">CARDÁPIO</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Sabores autênticos que vão fazer você voltar sempre
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {/* Espetos Section */}
          <div className="flex-1 bg-card border-2 border-primary/30 rounded-2xl p-6 shadow-elegant hover:shadow-glow-orange transition-smooth">
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">ESPETOS</h3>
            <div className="max-h-[500px] overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
              {espetos.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-1.5 border-b border-border/30 hover:bg-muted/30 px-2 rounded transition-smooth"
                >
                  <span className="text-foreground font-medium text-sm">{item.name}</span>
                  <span className="text-secondary font-bold text-base">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bebidas Section */}
          <div className="flex-1 bg-card border-2 border-secondary/30 rounded-2xl p-6 shadow-elegant hover:shadow-glow-yellow transition-smooth">
            <h3 className="text-2xl font-bold text-secondary mb-4 text-center">BEBIDAS</h3>
            <div className="max-h-[500px] overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-secondary/30 scrollbar-track-transparent">
              {bebidas.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-1.5 border-b border-border/30 hover:bg-muted/30 px-2 rounded transition-smooth"
                >
                  <span className="text-foreground font-medium text-sm">{item.name}</span>
                  <span className="text-primary font-bold text-base">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
