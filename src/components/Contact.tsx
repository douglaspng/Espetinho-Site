import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-background" style={{ fontFamily: "'Permanent Marker', cursive", letterSpacing: '0.02em' }}>
            VENHA NOS VISITAR
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Coluna Esquerda */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border-4 border-white/30">
              <div className="space-y-6 text-white">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Endereço</h3>
                    <p className="text-white/90">Rua Francisco Costabile Palure 42</p>
                    <p className="text-white/90">Jardim Germânia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Horário de Funcionamento</h3>
                    <p className="text-white/90">Segunda a Sábado: 16h às 23h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Telefone/WhatsApp</h3>
                    <p className="text-white/90">(31) 8752-0571</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border-4 border-white/30">
              <h3 className="font-bold text-2xl mb-6 text-white">Redes Sociais</h3>
              
              <div className="space-y-4">
                <Button 
                  variant="secondary" 
                  className="w-full justify-start gap-4 h-auto py-4 text-lg"
                >
                  <Instagram className="w-6 h-6" />
                  <span>@espetinhomineiro</span>
                </Button>

                <Button 
                  variant="secondary" 
                  className="w-full justify-start gap-4 h-auto py-4 text-lg"
                >
                  <Facebook className="w-6 h-6" />
                  <span>/espetinhomineiro</span>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
