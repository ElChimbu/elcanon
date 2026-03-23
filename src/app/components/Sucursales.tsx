import { MapPin, Clock, Navigation } from 'lucide-react';
import storefrontImg from '../../assets/ffdbedb700b81e2296fa81d741404555fd3e101e.png';

const sucursales = [
  {
    id: 1,
    name: 'Casa Central - Colón',
    address: 'Av. Colón 2591',
    schedule: 'Cierra a las 10:30 p.m.',
    features: ['Para llevar'],
    mapsUrl: 'https://maps.google.com/?q=Av.+Colon+2591+Mar+del+Plata',
  },
  {
    id: 2,
    name: 'Sucursal Centro',
    address: 'Bolívar 2380',
    schedule: 'Cierra a las 9 p.m.',
    features: ['Para llevar'],
    mapsUrl: 'https://maps.google.com/?q=Bolivar+2380+Mar+del+Plata',
  },
  {
    id: 3,
    name: 'Sucursal Norte',
    address: '9 de Julio 5001',
    schedule: 'Cierra a las 9 p.m.',
    features: ['Entrega a domicilio'],
    mapsUrl: 'https://maps.google.com/?q=9+de+Julio+5001+Mar+del+Plata',
  }
];

export function Sucursales() {
  return (
    <section id="sucursales" className="py-24 bg-[#E8E1D3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[#008C45] font-bold tracking-widest uppercase text-sm mb-3">Encontranos</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#5C4033] mb-6">Nuestras Sucursales</h3>
          <p className="text-lg text-[#8B7355]">
            Visitá nuestras tiendas y disfrutá del aroma a pan recién horneado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-[#FDFBF7]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#5C4033]/80 to-transparent z-10"></div>
            <img 
              src={storefrontImg} 
              alt="Frente de la panadería El Cañón" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20 flex items-center bg-[#FDFBF7]/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-[#E8E1D3]">
              <MapPin className="text-[#008C45] mr-2" />
              <span className="font-bold text-[#5C4033]">Casa Central</span>
            </div>
          </div>

          <div className="space-y-6">
            {sucursales.map((sucursal) => (
              <div 
                key={sucursal.id} 
                className="bg-[#FDFBF7] p-8 rounded-2xl shadow-sm border border-[#E8E1D3] hover:shadow-md transition-all group hover:border-[#008C45]/30 transform hover:-translate-x-2"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-[#5C4033] group-hover:text-[#008C45] transition-colors flex items-center gap-3">
                    <MapPin className="text-[#008C45] w-6 h-6 shrink-0" strokeWidth={2.5} />
                    {sucursal.name}
                  </h4>
                </div>
                
                <p className="text-lg text-[#5C4033] font-medium mb-3">{sucursal.address}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm text-[#8B7355] mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-[#008C45]" />
                    <span>{sucursal.schedule}</span>
                  </div>
                  {sucursal.features.map((feature, idx) => (
                    <span key={idx} className="bg-[#F4EFE6] px-3 py-1 rounded-full text-[#5C4033] font-medium border border-[#E8E1D3]">
                      {feature}
                    </span>
                  ))}
                </div>

                <a 
                  href={sucursal.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#008C45] font-bold hover:text-[#006f37] group/btn"
                >
                  <Navigation className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                  Ver en mapa
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
