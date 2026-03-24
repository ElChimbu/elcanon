import { FadeIn } from './FadeIn';
import { WhatsAppIcon } from './WhatsAppIcon';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function CTAFinal() {
  const handleWhatsApp = () => {
    window.open(buildWhatsAppUrl('Hola, quisiera hacer una consulta.'), '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#006633] via-[#008C45] to-[#3D2B1A] text-white relative overflow-hidden">
      {/* Decoración cálida de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574] rounded-full -translate-y-1/2 translate-x-1/3 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F4EFE6] rounded-full translate-y-1/2 -translate-x-1/3 opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn direction="up" duration={700}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#D4C5A9] tracking-widest uppercase text-xs font-semibold mb-4">✦ Hacé tu pedido ✦</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-[#FDFBF7] leading-tight">
            ¿Querés pan recién<br className="hidden md:block" /> horneado en tu mesa?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 font-light italic">
            Consultanos por WhatsApp y te ayudamos a elegir lo mejor.
          </p>
          <button
            onClick={handleWhatsApp}
            className="bg-[#FDFBF7] text-[#3D2B1A] hover:bg-[#F4EFE6] px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg font-semibold"
          >
            <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
            <span>Contactar por WhatsApp</span>
          </button>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 mb-2 font-light">El Cañón · Panadería Artesanal · Mar del Plata</p>
            <p className="text-sm text-white/50">
              Lunes a Sábado: 6:00 – 21:00 · Domingos: 7:00 – 13:00
            </p>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
