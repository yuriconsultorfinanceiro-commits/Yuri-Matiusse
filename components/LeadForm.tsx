import React, { useState } from 'react';
import type { FormData } from '../types';
import { UserIcon, WhatsAppIcon, EmailIcon, MoneyIcon, CategoryIcon } from './Icons';

// FIX: Changed return type from JSX.Element to React.ReactElement to resolve namespace issue.
function LeadForm(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    whatsapp: '',
    email: '',
    desiredValue: '',
    segment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here you would typically send the data to a server or CRM
    alert('Proposta solicitada com sucesso! Em breve entraremos em contato.');
    setFormData({
      fullName: '',
      whatsapp: '',
      email: '',
      desiredValue: '',
      segment: '',
    });
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-center text-slate-800 mb-2">Simule seu consórcio agora!</h3>
      <p className="text-center text-slate-500 mb-8">É rápido, fácil e sem compromisso.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
             <UserIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Nome completo"
            required
            className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-ym-green-500 focus:ring-ym-green-500 sm:text-sm py-3"
          />
        </div>

        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <WhatsAppIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="tel"
                name="whatsapp"
                id="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="WhatsApp (com DDD)"
                required
                className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-ym-green-500 focus:ring-ym-green-500 sm:text-sm py-3"
            />
        </div>

        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <EmailIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
                className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-ym-green-500 focus:ring-ym-green-500 sm:text-sm py-3"
            />
        </div>
        
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MoneyIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
                type="number"
                name="desiredValue"
                id="desiredValue"
                value={formData.desiredValue}
                onChange={handleChange}
                placeholder="Valor desejado (R$)"
                required
                className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-ym-green-500 focus:ring-ym-green-500 sm:text-sm py-3"
            />
        </div>

        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <CategoryIcon className="h-5 w-5 text-gray-400" />
            </div>
            <select
                name="segment"
                id="segment"
                value={formData.segment}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-ym-green-500 focus:ring-ym-green-500 sm:text-sm py-3"
            >
                <option value="" disabled>Selecione o Segmento</option>
                <option value="Automóveis">Automóveis</option>
                <option value="Imóveis">Imóveis</option>
                <option value="Serviços">Serviços</option>
            </select>
        </div>

        <div>
          <button
            type="submit"
            className="w-full justify-center rounded-md border border-transparent bg-ym-green-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-ym-green-700 focus:outline-none focus:ring-2 focus:ring-ym-green-500 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Quero minha proposta sem compromisso!
          </button>
        </div>
      </form>
      <p className="mt-6 text-center text-xs text-gray-500">
        Seus dados estão protegidos. Entraremos em contato apenas para enviar sua simulação personalizada.
      </p>
    </div>
  );
}

export default LeadForm;