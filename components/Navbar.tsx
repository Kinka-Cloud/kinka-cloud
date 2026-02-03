
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useLeadModal } from '../App';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openDemoModal } = useLeadModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowSubMenu(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-[80] transition-all duration-700 ${scrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="transition-transform duration-500 w-12 group-hover:scale-110">
              <img src="/logo.png" alt="logo" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">KINKA</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-orange-400 transition-colors">Home</Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-semibold text-slate-600 hover:text-orange-400 transition-colors">
                Soluções <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/40 mt-2 translate-y-2 group-hover:translate-y-0">
                {PRODUCTS.map(p => (
                  <Link key={p.slug} to={`/produtos/${p.slug}`} className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-orange-600/10 hover:text-orange-400 font-medium">
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/faq" className="text-sm font-semibold text-slate-600 hover:text-orange-400 transition-colors">FAQ</Link>
            <Link to="/sac" className="text-sm font-semibold text-slate-600 hover:text-orange-400 transition-colors">Suporte</Link>
            <button 
              onClick={() => openDemoModal()}
              className="bg-orange-400 hover:bg-orange-600 text-white px-6 py-2.5 text-sm font-bold rounded-xl shadow-lg shadow-orange-400/20 transition-all active:scale-95"
            >
              Falar com especialista
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(true)} 
              className="p-2 bg-slate-100/50 backdrop-blur-sm rounded-xl text-slate-900"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-3xl animate-in fade-in duration-500 flex flex-col">
          <div className="px-6 py-6 flex items-center justify-between border-b border-slate-100/50">
            <div className="flex items-center space-x-3 w-24">
              <img src="/logo.png" alt="logo" />
              <span className="font-black tracking-tighter text-xl">KINKA</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 bg-slate-900 text-white rounded-xl shadow-lg active:scale-90 transition-transform"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto px-6 py-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-100/50 rounded-2xl blur-3xl -z-10 animate-pulse"></div>

            <div className="space-y-2">
              <Link to="/" className="flex items-center justify-between p-4 text-2xl font-black text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors">
                Home <ChevronRight size={24} className="text-slate-300" />
              </Link>
              
              <button 
                onClick={() => setShowSubMenu(true)}
                className="w-full flex items-center justify-between p-4 text-2xl font-black text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors"
              >
                Soluções <ChevronRight size={24} className="text-slate-300" />
              </button>

              <Link to="/faq" className="flex items-center justify-between p-4 text-2xl font-black text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors">
                FAQ <ChevronRight size={24} className="text-slate-300" />
              </Link>

              <Link to="/sac" className="flex items-center justify-between p-4 text-2xl font-black text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors">
                Suporte <ChevronRight size={24} className="text-slate-300" />
              </Link>
            </div>

            <div className="mt-12">
              <button 
                onClick={() => { setIsOpen(false); openDemoModal(); }}
                className="w-full bg-orange-400 text-white py-6 text-lg font-black rounded-2xl shadow-2xl shadow-orange-400/30 active:scale-95 transition-transform"
              >
                Solicitar Diagnóstico
              </button>
            </div>
          </div>

          {showSubMenu && (
            <div className="absolute inset-0 z-10 bg-white animate-in slide-in-from-right duration-500 flex flex-col">
              <div className="px-6 py-6 flex items-center justify-between border-b border-slate-100">
                <button 
                  onClick={() => setShowSubMenu(false)}
                  className="flex items-center text-orange-400 font-bold space-x-2"
                >
                  <ArrowLeft size={20} />
                  <span>Voltar</span>
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2"><X size={24} /></button>
              </div>
              <div className="px-6 py-8 space-y-2">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-4 mb-4">Todas as Soluções</h3>
                {PRODUCTS.map(p => (
                  <Link 
                    key={p.slug} 
                    to={`/produtos/${p.slug}`}
                    className="flex items-center justify-between p-4 text-xl font-bold text-slate-900 bg-slate-50 rounded-2xl"
                  >
                    {p.title} <ChevronRight size={20} className="text-slate-300" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
