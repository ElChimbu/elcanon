import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useState, useEffect, type ReactNode } from 'react';
import bgImg1 from '../../assets/994e33d65e7f886a655035cca1389bd9e3c436a2.png';
import bgImg2 from '../../assets/picada.png';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const SLIDES = [bgImg1, bgImg2];
const INTERVAL_MS = 5000;

// Inline mount-animation helper — delay in ms
function Appear({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: 'opacity 700ms ease, transform 700ms ease',
      }}
    >
      {children}
    </div>
  );
}

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[560px] flex items-center justify-center overflow-hidden">
      {/* Background Images with crossfade */}
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Panadería El Cañón"
          className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      {/* Warm amber-sepia overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#2C1810]/92 via-[#4A2C1A]/78 to-[#2C1810]/20" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
        <div className="max-w-3xl pt-0 md:pt-0">
          <Appear delay={100}>
            <span className="inline-block px-5 py-2 rounded-full bg-[#D4A574]/20 text-[#F0CFA0] font-semibold text-xs md:text-sm tracking-widest uppercase mb-8 border border-[#D4A574]/40 backdrop-blur-sm">
              ✦ Panadería artesanal · Mar del Plata ✦
            </span>
          </Appear>
          <Appear delay={300}>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#FDFBF7] leading-tight mb-8">
              Hecho con amor,<br className="hidden md:block" />
              <span className="text-[#D4A574] italic font-semibold"> cada día.</span>
            </h1>
          </Appear>
          <Appear delay={500}>
            <p className="text-lg md:text-xl text-[#E8DDD0] mb-4 max-w-2xl font-light leading-relaxed">
              Panes y facturas recién horneados, confitería fina y servicios de lunch para tus eventos especiales.
            </p>
            <p className="text-sm md:text-base text-[#C4AE9A] mb-10 max-w-xl italic font-light">
              Más de 20 años llevando el sabor artesanal a las mesas de Mar del Plata.
            </p>
          </Appear>
          <Appear delay={750}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buildWhatsAppUrl('Hola, quisiera hacer un pedido.')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-[#008C45] text-white hover:bg-[#007A3B] transition-all duration-300 transform hover:scale-105 shadow-xl group"
              >
                <WhatsAppIcon className="w-5 h-5 mr-3" />
                Hacer Pedido
              </a>
              <a
                href="#productos"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-white/10 text-[#F4EFE6] hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/30 group"
              >
                Ver Productos
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Appear>
        </div>
      </div>
    </section>
  );
}
