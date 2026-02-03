
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Zap, ShieldCheck } from 'lucide-react';
import { useLeadModal } from '../App';

const ProductDetail: React.FC = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug);
  const { openDemoModal } = useLeadModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center min-h-[70vh]">
        <h1 className="text-3xl font-bold text-slate-900">Solução não encontrada</h1>
        <Link to="/" className="text-orange-600 mt-4 block underline">Voltar para home</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 animate-in fade-in duration-700">
      <section className="bg-slate-50 pt-16 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-4 block">Engenharia Kinkan</span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight italic">{product.headline}</h1>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
                <p className="text-orange-600 font-medium">
                  <strong>O Desafio:</strong> {product.painPoint}
                </p>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">{product.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openDemoModal(product.slug)}
                  className="bg-slate-900 hover:bg-black text-white px-8 py-4 font-bold rounded-2xl shadow-xl transition-all"
                >
                  Agendar demonstração
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('workflow');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white border border-slate-200 text-slate-700 px-8 py-4 font-bold rounded-2xl hover:border-slate-900 transition-all"
                >
                  Ver fluxo cloud
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
                <img src={product.image} alt={product.title} className="w-full h-auto object-cover aspect-video" />
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 shadow-xl rounded-2xl border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-400">
                    <Activity size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Status Cloud</div>
                    <div className="text-lg font-black text-slate-900">Kinkan.cloud OK</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.workflow && (
        <section id="workflow" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 italic">Colheita de Dados</h2>
            <p className="text-slate-600">Como nossa tecnologia amadurece o processo de ponta a ponta.</p>
          </div>
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {product.workflow.map((item, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-black shadow-lg shadow-slate-900/20 relative z-10">
                    {idx + 1}
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-slate-100 z-0"></div>
                  )}
                  <h3 className="font-bold mb-2 text-slate-900 uppercase text-xs tracking-widest">{item.step}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-2xl font-black mb-8 flex items-center italic">
                <Zap className="text-orange-600 mr-2" /> DNA Tecnológico
              </h2>
              <div className="space-y-4">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-start space-x-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-orange-600 shrink-0 mt-1" />
                    <span className="text-slate-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black mb-8 flex items-center italic">
                <ShieldCheck className="text-orange-600 mr-2" /> Vantagens Kinkan
              </h2>
              <div className="grid gap-6">
                {product.advantages.map((a, i) => (
                  <div key={i} className="group">
                    <div className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{a}</div>
                    <div className="w-12 h-1 bg-orange-200 group-hover:w-24 group-hover:bg-orange-600 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
              <div className="mt-16 bg-slate-900 text-white p-8 rounded-2xl">
                <h3 className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">Público Alvo</h3>
                <p className="text-lg leading-relaxed">{product.targetAudience}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 italic">Vamos amadurecer seu projeto?</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">Nossos engenheiros cloud estão prontos para transformar sua ideia em um ativo digital de alto valor em Kinkan.cloud.</p>
          <button 
            onClick={() => openDemoModal(product.slug)}
            className="bg-orange-600 hover:bg-orange-400 text-white px-10 py-5 text-xl font-black rounded-2xl shadow-2xl shadow-orange-600/20 transition-all flex items-center justify-center mx-auto"
          >
            Iniciar Colheita de Resultados <ArrowRight className="ml-3" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
