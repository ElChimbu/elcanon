import { Award, HeartHandshake, Leaf, Clock } from 'lucide-react';

const benefits = [
  { icon: Award, title: 'Calidad Premium', desc: 'Ingredientes seleccionados' },
  { icon: HeartHandshake, title: 'Atención Familiar', desc: 'Más de 20 años' },
  { icon: Leaf, title: 'Recetas Artesanales', desc: 'Sabor tradicional' },
  { icon: Clock, title: 'Horneado Diario', desc: 'Fresco todos los días' },
];

export function Beneficios() {
  return (
    <section className="py-16 bg-[#008C45] relative overflow-hidden">
      {/* Pattern de fondo */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-repeat" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="bg-white/10 rounded-2xl p-4 mb-4 backdrop-blur-sm group-hover:bg-white/20 transition-all transform group-hover:-translate-y-1">
                  <Icon className="w-8 h-8 text-[#FDFBF7]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[#FDFBF7] font-bold text-lg mb-1">{benefit.title}</h4>
                <p className="text-[#E8E1D3] text-sm opacity-90 font-light">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
