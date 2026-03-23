import logoImg from '../../assets/f9273fcf9bcbf47e14006f346fe2e50896bc434b.png';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-[#F4EFE6] pt-16 pb-8 border-t-4 border-[#008C45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src={logoImg} 
              alt="El Cañón Logo" 
              className="h-20 w-auto mb-6 bg-white/90 p-2 rounded-lg object-contain"
            />
            <p className="text-sm leading-relaxed opacity-90 text-[#E8E1D3]">
              Tradición, calidad y sabor en cada bocado. Panadería y confitería artesanal con más de 3 sucursales para estar siempre cerca tuyo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase text-[#FDFBF7] tracking-wider border-b border-[#4A4743] pb-2 inline-block">Secciones</h3>
            <ul className="space-y-3">
              <li><a href="#productos" className="hover:text-[#008C45] transition-colors">Nuestros Productos</a></li>
              <li><a href="#catering" className="hover:text-[#008C45] transition-colors">Servicio de Lunch</a></li>
              <li><a href="#como-comprar" className="hover:text-[#008C45] transition-colors">¿Cómo comprar?</a></li>
              <li><a href="#sucursales" className="hover:text-[#008C45] transition-colors">Sucursales</a></li>
            </ul>
          </div>

          {/* Contact & Branches */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4 uppercase text-[#FDFBF7] tracking-wider border-b border-[#4A4743] pb-2 inline-block">Contacto y Ubicaciones</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#008C45] mt-1 shrink-0" />
                <div className="text-sm space-y-2 text-[#E8E1D3]">
                  <p><strong>Casa Central:</strong> Av. Colón 2591</p>
                  <p><strong>Sucursal 2:</strong> Bolívar 2380</p>
                  <p><strong>Sucursal 3:</strong> 9 de Julio 5001</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <Phone className="w-5 h-5 text-[#008C45]" />
                <p className="font-semibold text-[#FDFBF7]">Pedidos por WhatsApp: 223 504-5882</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social and Copyright */}
        <div className="pt-8 border-t border-[#4A4743] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#E8E1D3]">
            © {new Date().getFullYear()} El Cañón Panaderías. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#F4EFE6] hover:text-[#008C45] transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-[#F4EFE6] hover:text-[#008C45] transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
