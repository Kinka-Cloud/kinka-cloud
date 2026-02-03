
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useLeadModal } from '../App';

const Home: React.FC = () => {
  const { openDemoModal } = useLeadModal();

  return (
    <div className="relative pt-20">
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100/50 backdrop-blur-sm text-orange-600 text-[10px] font-black tracking-[0.2em] uppercase mb-8 rounded-lg border border-orange-200/50">
                <img src="/logo.png" alt="logo" className="w-6 h-6" />
                <span>Software House & Automações</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] mb-8 italic tracking-tighter">
                Tecnologia que <span className="text-orange-400">amadurece</span> sua empresa.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                Na Kinkan, transformamos complexidade técnica em eficiência operacional. Soluções nativas em <span className="text-slate-900 font-bold">Kinkan.cloud</span> para negócios que visam o topo.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => openDemoModal()}
                  className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-3 text-lg font-black rounded-2xl transition-all shadow-2xl shadow-orange-400/30 flex items-center justify-center group active:scale-95"
                >
                  Solicitar demonstração <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => openDemoModal()}
                  className="bg-white/50 backdrop-blur-md border border-white hover:border-slate-900 text-slate-900 px-4 py-3 text-lg font-black rounded-2xl transition-all flex items-center justify-center active:scale-95 shadow-sm"
                >
                  Diagnóstico Cloud
                </button>
              </div>
            </div>
            <div className="relative animate-in fade-in zoom-in duration-1000 mt-12 lg:mt-0">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Time Kinkan em operação" 
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-400/20 to-transparent"></div>
              </div>

              <div className="absolute -bottom-10 -left-6 bg-white/70 backdrop-blur-xl p-8 shadow-2xl rounded-[2rem] border border-white/50 hidden md:block animate-bounce-slow max-w-xs">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-orange-400 p-3 rounded-2xl text-white shadow-lg shadow-orange-400/30">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <span className="text-xl font-black text-slate-900">+45%</span>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Performance Cloud</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">Média de ganho produtivo em parceiros Kinkan.cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 italic tracking-tighter">Ecossistema Cloud</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Tecnologia especializada para cada colheita de resultado.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map(p => (
              <Link key={p.slug} to={`/produtos/${p.slug}`} className="group relative bg-white/50 backdrop-blur-md border border-white p-10 rounded-[2.5rem] hover:bg-white hover:border-orange-600/50 hover:shadow-2xl hover:shadow-orange-400/5 transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-orange-400 transition-colors italic tracking-tighter">{p.title}</h3>
                <p className="text-slate-500 text-sm mb-10 leading-relaxed line-clamp-2 font-medium">{p.description}</p>
                <div className="flex items-center text-orange-400 font-black text-sm uppercase tracking-widest">
                  Ver solução <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] bg-orange-400/10 rounded-2xl blur-[120px] animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 italic tracking-tighter">Pronto para a colheita?</h2>
          <p className="text-slate-400 mb-16 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">Agende uma demonstração personalizada e descubra como o ecossistema <span className="text-white font-bold">Kinkan.cloud</span> pode automatizar centenas de horas do seu time ainda este mês.</p>
          <div className="max-w-md mx-auto">
            <button 
              onClick={() => openDemoModal()}
              className="w-full bg-orange-400 hover:bg-orange-600 text-white font-black py-6 rounded-2xl shadow-3xl shadow-orange-400/40 transition-all uppercase tracking-[0.2em] text-sm active:scale-95"
            >
              Agendar Demonstração Gratuita
            </button>
            <div className="mt-10 flex items-center justify-center space-x-6 text-slate-500 font-black text-[10px] uppercase tracking-widest">
              <span className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-green-500" /> Sem compromisso</span>
              <span className="flex items-center"><CheckCircle2 size={14} className="mr-2 text-green-500" /> Diagnóstico Cloud</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
