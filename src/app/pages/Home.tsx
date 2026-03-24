import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProductosDestacados } from '../components/ProductosDestacados';
import { CateringPromo } from '../components/CateringPromo';
import { ComoComprar } from '../components/ComoComprar';
import { Beneficios } from '../components/Beneficios';
import { Sucursales } from '../components/Sucursales';
import { Galeria } from '../components/Galeria';
import { CTAFinal } from '../components/CTAFinal';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export function Home() {
  return (
    <div className="font-sans text-[#5C4033] bg-[#FDFBF7] antialiased scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <ProductosDestacados />
        <CateringPromo />
        <ComoComprar />
        <Sucursales />
        <Galeria />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
