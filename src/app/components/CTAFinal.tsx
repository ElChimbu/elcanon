import { MessageCircle } from "lucide-react";

export function CTAFinal() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5491123456789?text=Hola,%20quiero%20hacer%20una%20consulta", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl mb-6">
            ¿Listo para probar nuestros productos?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Hacé tu pedido o consulta ahora mismo
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-white text-primary hover:bg-white/90 px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl text-lg md:text-xl"
          >
            <MessageCircle className="w-7 h-7" />
            <span>Contactar por WhatsApp</span>
          </button>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-2">El Cañón - Panadería Artesanal</p>
            <p className="text-sm text-white/60">
              Lunes a Sábado: 6:00 - 21:00 | Domingos: 7:00 - 13:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
