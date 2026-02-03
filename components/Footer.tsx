
import React from 'react';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.png" alt="logo" className="w-8 h-8" />
              <span className="text-xl font-black tracking-tighter text-white">KINKA</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Amadurecendo negócios através de inteligência de dados e automações exclusivas. 4 anos entregando tecnologia de ponta no domínio Kinkan.cloud.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-800 rounded-2xl hover:bg-orange-600 hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-2xl hover:bg-orange-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="mailto:contato@Kinkan.cloud" className="p-2 bg-slate-800 rounded-2xl hover:bg-orange-600 hover:text-white transition-all"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Colheita de Soluções</h4>
            <ul className="space-y-4 text-sm">
              {PRODUCTS.map(p => (
                <li key={p.slug}>
                  <a href={`#/produtos/${p.slug}`} className="hover:text-orange-600 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-2xl bg-slate-700 mr-2 group-hover:bg-orange-600 transition-colors"></span>
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Institucional</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#/" className="hover:text-orange-600 transition-colors">Nossa História</a></li>
              <li><a href="#/faq" className="hover:text-orange-600 transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="#/sac" className="hover:text-orange-600 transition-colors">Suporte Kinka</a></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Ecossistema Cloud</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contato Direto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-400" />
                <span>+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-400" />
                <span>contato@Kinkan.cloud</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-2xl bg-orange-400/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-2xl bg-orange-400"></div>
                </div>
                <span className="font-bold text-white tracking-tight">Kinkan.cloud</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-[0.15em]">
          <p>© {new Date().getFullYear()} KinkanSoftware House. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
