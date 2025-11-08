import React from 'react';
import LeadForm from './LeadForm';
import { ancoraLogoBase64 } from '../assets/logos';

// FIX: Changed return type from JSX.Element to React.ReactElement to resolve namespace issue.
function MainContent(): React.ReactElement {
  return (
    <section className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Persuasion Block */}
        <div className="text-slate-700 space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">Por que o Consórcio é a sua melhor escolha?</h2>
          <p>
            Nos últimos anos, o número de brasileiros que optaram pelo consórcio aumentou mais de 20%, segundo dados da ABAC (Associação Brasileira de Administradoras de Consórcios). Essa escolha inteligente reflete uma busca por planejamento e economia.
          </p>
          <p>
            Em média, o consórcio economiza até 30% em relação a um financiamento bancário do mesmo valor. Enquanto o financiamento cobra juros altos e taxas ocultas, o consórcio não tem juros — apenas uma taxa de administração diluída. No final, você recebe 100% do crédito contratado, sem perder nada no caminho.
          </p>
          <div className="bg-yellow-100/50 border-l-4 border-ym-gold text-ym-gold p-4 rounded-r-lg italic">
            <p className="font-medium">
              “Você prefere pagar juros pro banco ou investir num plano que devolve cada centavo pra você em forma de patrimônio?”
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mt-8 flex flex-col sm:flex-row items-center gap-6">
              <img src={ancoraLogoBase64} alt="Âncora Consórcios Logo" className="h-12 w-auto"/>
              <div className="text-center sm:text-left">
                  <p className="font-semibold text-slate-800">Representante Autorizado Âncora Consórcios</p>
                  <p className="text-sm text-slate-500">Há mais de 35 anos realizando sonhos com solidez e confiança.</p>
              </div>
          </div>
          <p className="text-center text-lg font-semibold text-ym-green-700 pt-4">
            YM Consórcio & Investimento — transformando planejamento em conquistas reais.
          </p>
        </div>

        {/* Form Block */}
        <div>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

export default MainContent;