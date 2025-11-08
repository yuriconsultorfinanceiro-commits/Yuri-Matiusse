import React from 'react';
import { ymLogoBase64 } from '../assets/logos';

// FIX: Changed return type from JSX.Element to React.ReactElement to resolve namespace issue.
function Header(): React.ReactElement {
  return (
    <header className="py-8">
      <div className="container mx-auto px-6 text-center">
        <img 
          src={ymLogoBase64} 
          alt="YM Consórcio & Investimento Logo" 
          className="mx-auto h-24 w-auto mb-8"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          Pare de pagar juros e comece a investir no seu próprio patrimônio!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Com a YM Consórcio & Investimento, você realiza seus sonhos pagando parcelas menores, sem juros e com total segurança.
        </p>
      </div>
    </header>
  );
}

export default Header;