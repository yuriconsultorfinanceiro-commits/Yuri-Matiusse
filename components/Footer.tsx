import React from 'react';
import { ymLogoBase64 } from '../assets/logos';

// FIX: Changed return type from JSX.Element to React.ReactElement to resolve namespace issue.
function Footer(): React.ReactElement {
  return (
    <footer className="bg-slate-800 text-white mt-16">
      <div className="container mx-auto px-6 py-12 text-center">
        <p className="text-xl lg:text-2xl font-semibold max-w-3xl mx-auto text-slate-200">
          Transforme o que hoje é um sonho em um plano real. O primeiro passo é gratuito — o próximo já é o seu futuro!
        </p>
        <img 
          src={ymLogoBase64} 
          alt="YM Consórcio & Investimento Logo" 
          className="mx-auto h-20 w-auto my-8"
        />
        <p className="text-sm text-slate-400">
          © 2025 YM Consórcio & Investimento — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;