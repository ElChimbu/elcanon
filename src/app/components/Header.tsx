import React from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/f9273fcf9bcbf47e14006f346fe2e50896bc434b.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Productos', href: '#productos' },
    { name: 'Catering', href: '#catering' },
    { name: 'Cómo Comprar', href: '#como-comprar' },
    { name: 'Sucursales', href: '#sucursales' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFBF7]/90 backdrop-blur-md shadow-sm border-b border-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src={logoImg} alt="El Cañón Panadería y Confitería" className="h-16 w-auto object-contain drop-shadow-sm" />
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#5C4033] hover:text-[#008C45] font-semibold transition-colors uppercase text-sm tracking-wider"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a 
              href="https://wa.me/5492235045882" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#008C45] text-white px-6 py-2 rounded-full font-bold hover:bg-[#006f37] transition-all transform hover:scale-105 shadow-md"
            >
              Hacer Pedido
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#5C4033] hover:text-[#008C45] p-2"
            >
              <span className="sr-only">Abrir menú</span>
              {isMenuOpen ? (
                <X className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#E8E1D3]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-base font-medium text-[#5C4033] hover:text-[#008C45] hover:bg-[#F4EFE6] rounded-md uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <a 
                href="https://wa.me/5492235045882" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#008C45] text-white px-6 py-3 rounded-full font-bold hover:bg-[#006f37] shadow-sm"
              >
                Hacer Pedido
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
