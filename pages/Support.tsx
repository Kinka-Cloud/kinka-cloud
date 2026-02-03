
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageSquare, Clock, ArrowUpRight, HelpCircle, ChevronRight } from 'lucide-react';

const Support: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 italic">Suporte Kinkan</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Assistência especializada para manter seu ecossistema digital sempre saudável e produtivo.</p>
        </div>
      </section>

      <section className="py-24 bg-white relative -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-slate-100 shadow-xl rounded-2xl">
              <div className="bg-orange-50 w-14 h-14 flex items-center justify-center rounded-xl mb-8 text-orange-400">
                <MessageSquare />
              </div>
              <h3 className="text-xl font-bold mb-4">Chat em Tempo Real</h3>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed">Fale com especialistas Kinkan.cloud diretamente pelo painel.</p>
              <button className="text-orange-600 font-bold flex items-center hover:translate-x-1 transition-transform">
                Iniciar chat <ArrowUpRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-white p-10 border border-slate-100 shadow-xl rounded-2xl">
              <div className="bg-orange-50 w-14 h-14 flex items-center justify-center rounded-xl mb-8 text-orange-400">
                <Mail />
              </div>
              <h3 className="text-xl font-bold mb-4">E-mail de Suporte</h3>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed">Para tickets complexos ou solicitações de novas funcionalidades.</p>
              <button className="text-orange-600 font-bold flex items-center hover:translate-x-1 transition-transform">
                suporte@Kinkan.cloud <ArrowUpRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-50 p-10 border border-slate-200 shadow-xl rounded-2xl">
              <div className="bg-slate-900 w-14 h-14 flex items-center justify-center rounded-xl mb-8 text-white">
                <Clock />
              </div>
              <h3 className="text-xl font-bold mb-4 italic">SLA Kinkan</h3>
              <ul className="text-sm text-slate-600 space-y-4 mb-8">
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Emergência</span>
                  <span className="font-bold text-slate-900">Até 4h</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Alta</span>
                  <span className="font-bold text-slate-900">Até 8h</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span>Normal</span>
                  <span className="font-bold text-slate-900">Até 24h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 italic">Base de Conhecimento</h2>
            <p className="text-slate-500">Documentação técnica para usuários Kinkan.</p>
          </div>
          <div className="space-y-4">
            <Link to="/faq" className="block p-6 bg-white border border-slate-200 rounded-2xl hover:border-orange-600 transition-colors group">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900">Ver FAQ Kinkan</span>
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
