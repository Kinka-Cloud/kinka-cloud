
import React, { useState, createContext, useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Support from './pages/Support';
import FAQ from './pages/FAQ';

interface LeadContextType {
  openDemoModal: (productSlug?: string) => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const useLeadModal = () => {
  const context = useContext(LeadContext);
  if (!context) throw new Error('useLeadModal must be used within a LeadProvider');
  return context;
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const openDemoModal = (productSlug?: string) => {
    setSelectedProduct(productSlug);
    setIsModalOpen(true);
  };

  return (
    <LeadContext.Provider value={{ openDemoModal }}>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/produtos/:slug" element={<ProductDetail />} />
              <Route path="/sac" element={<Support />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <LeadModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            initialProduct={selectedProduct}
          />
        </div>
      </HashRouter>
    </LeadContext.Provider>
  );
};

export default App;
