import { useState, useEffect } from 'react';
import promoImg1 from '../../assets/22e8fda21768dd54043bd519c5ff1dfaa1f1a78d.png';
import promoImg2 from '../../assets/lunch2.png';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { WhatsAppIcon } from './WhatsAppIcon';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const PROMO_SLIDES = [promoImg1, promoImg2];
const PROMO_INTERVAL_MS = 4500;

export function CateringPromo() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % PROMO_SLIDES.length);
    }, PROMO_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const caracteristicas = [
    "Picadas completas",
    "Sandwiches de miga frescos",
    "Masas finas y secas",
    "Opciones para 10, 20 o 25 personas",
    "Entrega a domicilio disponible"
  ];

  return (
    <section id="catering" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4EFE6] rounded-full filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#008C45] rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Imagen de Promo */}
          <FadeIn direction="right" duration={700}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#008C45] to-[#5C4033] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            {/* Crossfade slideshow */}
            <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
              {PROMO_SLIDES.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="Servicios de Lunch El Cañón"
                  className="w-full object-cover transition-opacity duration-1000"
                  style={{
                    opacity: i === current ? 1 : 0,
                    position: i === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              ))}
            </div>
          </div>
          </FadeIn>

          {/* Texto e info */}
          <FadeIn direction="left" duration={700} delay={100}>
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#008C45]/10 text-[#008C45] font-bold text-sm tracking-widest uppercase mb-6 border border-[#008C45]/20">
              Eventos y Cumpleaños
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#5C4033] tracking-tight leading-tight mb-6">
              Servicios de Lunch <br />
              <span className="text-[#008C45] italic">Completos</span>
            </h2>
            <p className="text-xl text-[#8B7355] mb-10 leading-relaxed font-light">
              Solucionamos la comida de tus eventos con nuestras promos armadas. Calidad de primera, precios accesibles y el sabor artesanal de siempre.
            </p>

            <ul className="space-y-4 mb-12">
              {caracteristicas.map((item, index) => (
                <li key={index} className="flex items-center text-[#5C4033] font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#008C45] mr-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={buildWhatsAppUrl('Hola, quisiera saber mas sobre el servicio de lunch.')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-[#008C45] text-white hover:bg-[#006f37] transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#008C45]/30"
              >
                <WhatsAppIcon className="w-5 h-5 mr-3" />
                Consultar Promos
              </a>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
