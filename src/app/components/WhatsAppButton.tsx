import { WhatsAppIcon } from './WhatsAppIcon';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl('Hola, quisiera hacer una consulta.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all transform hover:scale-110 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      
      {/* Tooltip visible only on hover on large screens */}
      <span className="absolute right-full mr-4 bg-[#FDFBF7] text-[#5C4033] text-sm font-semibold py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block border border-[#E8E1D3]">
        ¿Hablamos por WhatsApp?
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 border-[6px] border-transparent border-l-[#FDFBF7]"></div>
      </span>
    </a>
  );
}
