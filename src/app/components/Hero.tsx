import { ArrowRight, ShoppingBag } from 'lucide-react';
import bgImg from '../../assets/994e33d65e7f886a655035cca1389bd9e3c436a2.png';

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#5C4033]">
      {/* Background Image */}
      <img 
        src={bgImg} 
        alt="Panes frescos El Cañón" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-[#1A1A1A]/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
        <div className="max-w-3xl pt-20 md:pt-0">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#008C45]/20 text-[#008C45] font-bold text-xs md:text-sm tracking-widest uppercase mb-6 border border-[#008C45]/30 shadow-sm backdrop-blur-sm">
            El verdadero sabor
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#FDFBF7] tracking-tight leading-tight mb-6">
            Tradición y <br className="hidden md:block"/> 
            <span className="text-[#008C45] drop-shadow-lg">sabor artesanal</span>
            <br className="hidden md:block"/> en cada bocado
          </h1>
          <p className="text-lg md:text-2xl text-[#E8E1D3] mb-10 max-w-2xl font-light leading-relaxed">
            Panes recién horneados, confitería fina y un servicio de lunch exclusivo para tus mejores eventos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="https://wa.me/5492235045882" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-[#008C45] text-white hover:bg-[#007A3B] transition-all transform hover:scale-105 shadow-xl group"
            >
              <ShoppingBag className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Hacer Pedido Ahora
            </a>
            <a 
              href="#productos" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-all border border-white/30 group"
            >
              Ver Catálogo
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
