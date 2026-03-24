import React from 'react';
import { FadeIn } from './FadeIn';
import panaderiaImg from '../../assets/994e33d65e7f886a655035cca1389bd9e3c436a2.png';
import confiteriaImg from '../../assets/33d17c5d353e25261a529478e7c533bc0142373d.png';
import alfajorImg from '../../assets/0944d1a05d19c1bd1e194a8d06fb981f24da4d7e.png';
import promoImg from '../../assets/22e8fda21768dd54043bd519c5ff1dfaa1f1a78d.png';
import storefrontImg from '../../assets/ffdbedb700b81e2296fa81d741404555fd3e101e.png';
import { Instagram } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const images = [
  panaderiaImg,
  alfajorImg,
  promoImg,
  confiteriaImg,
  storefrontImg,
  'https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYmFrZXJ5JTIwYnJlYWR8ZW58MXx8fHwxNzc0MjUxNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
];

export function Galeria() {
  return (
    <section className="py-24 bg-[#F4EFE6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-2xl mb-6 shadow-lg transform -rotate-6">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-[#5C4033] mb-4">
            Seguinos en Instagram
          </h3>
          <p className="text-lg text-[#8B7355]">
            <a href="#" className="font-bold text-[#008C45] hover:underline">@elcañonpanaderia</a>
            <br />
            Mirá todo lo que sale del horno todos los días.
          </p>
        </div>
        </FadeIn>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry gutter="16px">
            {images.map((img, i) => (
              <FadeIn key={i} direction="up" delay={i * 80} threshold={0.05}>
              <div className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <img
                  src={img}
                  alt={`Galería El Cañón ${i + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                  style={{ display: "block" }}
                />
                <div className="absolute inset-0 bg-[#3D2B1A]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <Instagram className="w-8 h-8 text-white transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
              </FadeIn>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
