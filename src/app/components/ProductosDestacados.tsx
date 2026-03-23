import confiteriaImg from '../../assets/33d17c5d353e25261a529478e7c533bc0142373d.png';
import alfajorImg from '../../assets/0944d1a05d19c1bd1e194a8d06fb981f24da4d7e.png';
import panaderiaImg from '../../assets/994e33d65e7f886a655035cca1389bd9e3c436a2.png';
import { ChevronRight } from 'lucide-react';

const productos = [
  {
    id: 1,
    title: 'Panadería Artesanal',
    description: 'Nuestros clásicos panes, galletas y facturas horneadas en el día.',
    image: panaderiaImg,
    badge: 'Más Vendido'
  },
  {
    id: 2,
    title: 'Alfajores Exclusivos',
    description: 'El clásico alfajor de El Cañón, con extra dulce de leche.',
    image: alfajorImg,
    badge: 'Recomendado'
  },
  {
    id: 3,
    title: 'Confitería Fina',
    description: 'Budines, tortas y opciones dulces para acompañar tu mate o café.',
    image: confiteriaImg,
    badge: 'Dulce'
  }
];

export function ProductosDestacados() {
  return (
    <section id="productos" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[#008C45] font-bold tracking-widest uppercase text-sm mb-3">Nuestra Especialidad</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#5C4033] mb-6">Lo Mejor del Horno</h3>
          <p className="text-lg text-[#8B7355]">
            Nuestros productos estrella, preparados cada mañana con los mejores ingredientes y mucho amor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(92,64,51,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(92,64,51,0.2)] transition-all duration-300 transform hover:-translate-y-2 border border-[#E8E1D3]">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 bg-[#008C45] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                {producto.badge}
              </div>
              
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={producto.image} 
                  alt={producto.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <h4 className="text-2xl font-bold text-[#5C4033] mb-3 group-hover:text-[#008C45] transition-colors">
                  {producto.title}
                </h4>
                <p className="text-[#8B7355] leading-relaxed mb-6">
                  {producto.description}
                </p>
                <a 
                  href="https://wa.me/5492235045882"
                  className="inline-flex items-center text-[#008C45] font-bold hover:text-[#006f37] group/link"
                >
                  Consultar disponibilidad
                  <ChevronRight className="w-5 h-5 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
