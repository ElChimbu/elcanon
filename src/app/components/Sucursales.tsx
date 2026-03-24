import { useRef, useState } from 'react';
import { MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';
import { FadeIn } from './FadeIn';

const sucursales = [
  {
    id: 1,
    name: 'Casa Central – Colón',
    address: 'Av. Colón 2591',
    schedule: 'Cierra a las 10:30 p.m.',
    features: ['Para llevar'],
    mapsUrl: 'https://maps.google.com/?q=Av.+Colon+2591+Mar+del+Plata',
    embedUrl:
      'https://maps.google.com/maps?q=Av.+Colon+2591,+Mar+del+Plata,+Argentina&output=embed&z=16',
  },
  {
    id: 2,
    name: 'Sucursal Centro',
    address: 'Bolívar 2380',
    schedule: 'Cierra a las 9 p.m.',
    features: ['Para llevar'],
    mapsUrl: 'https://maps.google.com/?q=Bolivar+2380+Mar+del+Plata',
    embedUrl:
      'https://maps.google.com/maps?q=Bolivar+2380,+Mar+del+Plata,+Argentina&output=embed&z=16',
  },
  {
    id: 3,
    name: 'Sucursal Norte',
    address: '9 de Julio 5001',
    schedule: 'Cierra a las 9 p.m.',
    features: ['Entrega a domicilio'],
    mapsUrl: 'https://maps.google.com/?q=9+de+Julio+5001+Mar+del+Plata',
    embedUrl:
      'https://maps.google.com/maps?q=9+de+Julio+5001,+Mar+del+Plata,+Argentina&output=embed&z=16',
  },
];

export function Sucursales() {
  const [activeId, setActiveId] = useState(1);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const active = sucursales.find((s) => s.id === activeId)!;

  const handleSelectSucursal = (id: number) => {
    setActiveId(id);

    if (!window.matchMedia('(max-width: 1023px)').matches || !mapRef.current) {
      return;
    }

    const headerOffset = 96;
    const mapTop = mapRef.current.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(mapTop, 0),
      behavior: 'smooth',
    });
  };

  return (
    <section id="sucursales" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[#008C45] font-semibold tracking-widest uppercase text-sm mb-3">
              Encontranos
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#5C4033] mb-6">
              Nuestras Sucursales
            </h3>
            <p className="text-lg text-[#8B7355]">
              Visitá nuestras tiendas y disfrutá del aroma a pan recién horneado.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map embed */}
          <FadeIn direction="right" duration={700}>
            <div ref={mapRef} className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
              <iframe
                key={active.embedUrl}
                src={active.embedUrl}
                title={`Mapa – ${active.name}`}
                className="w-full h-[420px] lg:h-[500px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Badge with active branch name */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#FDFBF7]/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-[#E8E1D3]">
                <MapPin className="text-[#008C45] w-4 h-4 shrink-0" />
                <span className="font-bold text-[#5C4033] text-sm">{active.name}</span>
              </div>
              {/* Open in Google Maps link */}
              <a
                href={active.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-md border border-[#E8E1D3] text-xs font-semibold text-[#008C45] hover:bg-[#008C45] hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Abrir en Maps
              </a>
            </div>
          </FadeIn>

          {/* Branch cards */}
          <div className="space-y-5">
            {sucursales.map((sucursal) => {
              const isActive = sucursal.id === activeId;
              return (
                <FadeIn key={sucursal.id} direction="left" delay={sucursal.id * 100}>
                  <button
                    onClick={() => handleSelectSucursal(sucursal.id)}
                    className={`w-full text-left p-7 rounded-3xl border transition-all duration-300 shadow-sm
                      ${isActive
                        ? 'bg-white border-[#008C45] shadow-[0_8px_30px_-8px_rgba(0,140,69,0.25)] -translate-x-1'
                        : 'bg-[#F4EFE6] border-[#E8E1D3] hover:border-[#008C45]/40 hover:shadow-md hover:-translate-x-1'
                      }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4
                        className={`font-serif text-xl font-bold flex items-center gap-3 transition-colors ${
                          isActive ? 'text-[#008C45]' : 'text-[#5C4033]'
                        }`}
                      >
                        <MapPin
                          className={`w-5 h-5 shrink-0 transition-colors ${
                            isActive ? 'text-[#008C45]' : 'text-[#8B7355]'
                          }`}
                          strokeWidth={2.5}
                        />
                        {sucursal.name}
                      </h4>
                      {isActive && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#008C45] px-2.5 py-1 rounded-full">
                          Seleccionado
                        </span>
                      )}
                    </div>

                    <p className="text-base text-[#5C4033] font-medium mb-3 pl-8">
                      {sucursal.address}
                    </p>

                    <div className="flex flex-wrap gap-3 pl-8 items-center text-sm text-[#8B7355] mb-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#008C45]" />
                        <span>{sucursal.schedule}</span>
                      </div>
                      {sucursal.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-[#5C4033] font-medium border border-[#E8E1D3] bg-white/60"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <a
                      href={sucursal.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 pl-8 text-[#008C45] font-bold text-sm hover:text-[#006f37] group/btn"
                    >
                      <Navigation className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      Ver en mapa
                    </a>
                  </button>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
