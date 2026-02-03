
import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, initialProduct }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300 p-4">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] relative overflow-hidden animate-in zoom-in duration-300">
        <div className="px-6 py-4 flex items-center justify-between border-b border-slate-50 bg-white">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="logo" className="w-10 h-10" />
            <div>
              <h2 className="text-lg font-black text-slate-900 leading-none italic">Diagnóstico Cloud</h2>
              <p className="text-[9px] font-black text-orange-400 uppercase tracking-widest mt-0.5">Aceleração Kinkan.cloud</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 md:p-8">
          {!isSubmitted ? (
            <form id="lead-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input 
                  required 
                  type="text" 
                  className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:border-orange-600 focus:bg-white transition-all text-sm font-medium placeholder:text-slate-400" 
                  placeholder="Seu nome" 
                />
                <input 
                  required 
                  type="email" 
                  className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:border-orange-600 focus:bg-white transition-all text-sm font-medium placeholder:text-slate-400" 
                  placeholder="E-mail profissional" 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input 
                  required 
                  type="text" 
                  className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:border-orange-600 focus:bg-white transition-all text-sm font-medium placeholder:text-slate-400" 
                  placeholder="Nome da empresa" 
                />
                <div className="relative">
                  <select 
                    defaultValue={initialProduct || ""}
                    className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:border-orange-600 focus:bg-white transition-all text-sm font-medium appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Qual seu interesse?</option>
                    {PRODUCTS.map(p => (
                      <option key={p.slug} value={p.slug}>{p.title}</option>
                    ))}
                    <option value="outros">Consultoria Sob Medida</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <textarea 
                rows={2} 
                className="w-full bg-slate-50 border-2 border-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:border-orange-600 focus:bg-white transition-all text-sm font-medium resize-none placeholder:text-slate-400" 
                placeholder="Conte brevemente sobre sua necessidade..."
              ></textarea>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-orange-400 hover:bg-orange-600 disabled:bg-slate-200 text-white font-black py-4 rounded-xl shadow-xl shadow-orange-400/20 transition-all flex items-center justify-center space-x-2 text-base active:scale-[0.98]"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-2xl animate-spin"></div>
                  ) : (
                    <>
                      <span>Solicitar Diagnóstico</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
                <p className="text-[9px] text-slate-400 mt-4 text-center font-bold uppercase tracking-[0.2em] leading-none">
                  Dados protegidos Kinkan.cloud
                </p>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center animate-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                <CheckCircle2 size={32} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2 italic tracking-tighter">Semente Plantada!</h2>
              <p className="text-slate-600 mb-6 text-sm font-medium">Um especialista Kinkanentrará em contato em breve.</p>
              <button 
                onClick={onClose}
                className="bg-slate-900 text-white px-8 py-3.5 font-black rounded-xl hover:bg-orange-400 transition-all shadow-lg active:scale-95 text-sm"
              >
                Entendido
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
