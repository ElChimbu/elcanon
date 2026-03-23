import { MousePointerClick, MessageSquare, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Elegí tus productos',
    description: 'Navegá nuestra web o visitá nuestras redes para ver todo lo rico que hacemos.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicate',
    description: 'Envianos un mensaje por WhatsApp al 223 504-5882 y te asesoramos al instante.',
  },
  {
    icon: PackageCheck,
    title: 'Disfrutá',
    description: 'Retirá tu pedido por nuestras sucursales o pedí envío a domicilio.',
  }
];

export function ComoComprar() {
  return (
    <section id="como-comprar" className="py-24 bg-[#FDFBF7] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8E1D3] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[#008C45] font-bold tracking-widest uppercase text-sm mb-4">Proceso simple</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#5C4033] mb-6">
            ¿Cómo realizar tu pedido?
          </h3>
          <p className="text-xl text-[#8B7355] font-light">
            Queremos que la parte más difícil sea decidir qué llevar. 
            El resto, lo hacemos fácil en 3 simples pasos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Línea conectora solo visible en desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#008C45]/20 via-[#008C45]/50 to-[#008C45]/20 z-0 border-t border-dashed border-[#008C45]"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-[#F4EFE6] shadow-[0_10px_30px_-10px_rgba(0,140,69,0.3)] mb-8 group-hover:border-[#008C45] transition-all duration-500 transform group-hover:-translate-y-2">
                  <Icon className="w-10 h-10 text-[#008C45]" strokeWidth={1.5} />
                </div>
                
                <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-[#E8E1D3] group-hover:shadow-md transition-shadow flex-1 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-[#5C4033] mb-4 group-hover:text-[#008C45] transition-colors">
                    <span className="text-[#008C45] font-black mr-2 opacity-50 text-xl">{index + 1}.</span>
                    {step.title}
                  </h4>
                  <p className="text-[#8B7355] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
