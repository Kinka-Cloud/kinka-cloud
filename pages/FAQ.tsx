
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = Array.from(new Set(FAQS.map(f => f.category)));
  
  const filteredFaqs = FAQS.filter(f => 
    f.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Como podemos ajudar?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Pesquise sua dúvida..." 
              className="w-full bg-white border border-slate-200 pl-16 pr-6 py-5 rounded-2xl shadow-lg shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-orange-600/20 transition-all text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {categories.map(category => {
            const categoryFaqs = filteredFaqs.filter(f => f.category === category);
            if (categoryFaqs.length === 0) return null;

            return (
              <div key={category} className="mb-12">
                <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8 border-b border-slate-100 pb-4">{category}</h2>
                <div className="space-y-4">
                  {categoryFaqs.map((faq, idx) => {
                    const globalIdx = FAQS.findIndex(f => f.question === faq.question);
                    const isOpen = openIndex === globalIdx;

                    return (
                      <div key={faq.question} className={`border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-xl' : 'hover:bg-slate-50'}`}>
                        <button 
                          onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                          className="w-full text-left p-6 flex justify-between items-center group"
                        >
                          <span className={`font-bold transition-colors ${isOpen ? 'text-orange-600' : 'text-slate-900'}`}>{faq.question}</span>
                          {isOpen ? <ChevronUp size={20} className="text-orange-600" /> : <ChevronDown size={20} className="text-slate-400 group-hover:text-slate-900" />}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-1">
                            <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 italic">Nenhum resultado encontrado para sua pesquisa.</p>
              <button onClick={() => setSearchTerm('')} className="text-orange-600 font-bold mt-4 underline">Limpar busca</button>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-slate-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Não encontrou o que precisava?</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">Nossos especialistas estão prontos para oferecer um atendimento personalizado e sanar qualquer dúvida comercial ou técnica.</p>
          <a href="#/sac" className="inline-block bg-slate-900 text-white px-8 py-4 font-bold rounded-2xl shadow-xl hover:bg-black transition-all">
            Falar com suporte técnico
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
