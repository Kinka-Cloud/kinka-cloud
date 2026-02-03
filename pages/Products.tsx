
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ArrowRight, Box, Cpu, Zap, Smartphone, Globe } from 'lucide-react';

const Products: React.FC = () => {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'gestao-comercial': return <Box size={32} />;
      case 'automacoes-onboarding': return <Zap size={32} />;
      case 'automacoes-cobranca': return <Cpu size={32} />;
      case 'apps-sob-demanda': return <Smartphone size={32} />;
      case 'sites-sob-demanda': return <Globe size={32} />;
      default: return <Box size={32} />;
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-400/10 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-orange-400 font-black tracking-[0.3em] uppercase text-xs mb-6 block">Kinkan Cloud Engineering</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 italic tracking-tighter">Nosso Ecossistema</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">Tecnologia madura, desenhada para quem não aceita nada menos que a excelência em Kinkan.cloud.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {PRODUCTS.map((p, idx) => (
            <div key={p.slug} className={`flex flex-col lg:flex-row gap-16 items-center p-8 md:p-12 bg-slate-50 border border-slate-100 rounded-[3rem] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-orange-400/5 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 w-full">
                <div className="bg-white p-4 rounded-[2rem] shadow-xl overflow-hidden group">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-auto rounded-[1.5rem] object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-8">
                <div className="inline-flex items-center space-x-3 text-orange-400 bg-orange-50 px-5 py-2.5 rounded-xl">
                  {getIcon(p.slug)}
                  <span className="font-black tracking-[0.2em] uppercase text-[10px]">{p.title}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tighter leading-tight">{p.headline}</h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">{p.description}</p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Link 
                    to={`/produtos/${p.slug}`} 
                    className="inline-flex items-center justify-center bg-slate-900 text-white px-10 py-5 font-black rounded-xl hover:bg-orange-400 transition-all group active:scale-95 shadow-xl shadow-slate-900/10"
                  >
                    Explorar Tecnologia <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 italic tracking-tighter leading-tight">"Software é como um fruto: se você não planta a tecnologia certa hoje, não colherá eficiência amanhã."</h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-400/30 mb-6">
              <Zap size={32} />
            </div>
            <p className="font-black text-slate-900 uppercase tracking-widest text-sm mb-1">Kinkan Core Engineering</p>
            <p className="text-xs text-slate-500 font-bold">Inovação Cloud desde 2021</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
