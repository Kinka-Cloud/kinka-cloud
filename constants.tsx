
import { Product, FAQItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'gestao-comercial',
    title: 'Gestão Comercial 360º',
    headline: 'Controle suas vendas sem planilhas, erros ou retrabalho',
    painPoint: 'Planilhas dispersas e falta de clareza nos números impedem o crescimento da sua empresa.',
    description: 'Uma solução robusta de ERP focada no comercial, integrando todos os pilares da sua operação em uma interface limpa e rápida.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Gestão Completa de Vendas e Orçamentos',
      'Controle de Compras e Suprimentos',
      'Cadastro Unificado de Clientes e CRM',
      'Gestão de Prestação de Serviços e OS',
      'Controle de Vendedores e Metas',
      'Módulo de Funcionários e Permissões',
      'Gestão de Fornecedores e Notas'
    ],
    advantages: [
      'Visibilidade total do fluxo de caixa',
      'Redução de erros manuais em 90%',
      'Acesso mobile de qualquer lugar'
    ],
    targetAudience: 'Empresas de comércio e serviços que buscam profissionalizar a operação comercial.'
  },
  {
    id: '2',
    slug: 'automacoes-onboarding',
    title: 'Onboarding Automático',
    headline: 'Receba novos clientes com perfeição e agilidade',
    painPoint: 'Processos manuais de entrada de cliente geram demora, erros e má primeira impressão.',
    description: 'Elimine o "gargalo" na entrada de novos clientes. Nossa automação cuida do trabalho sujo enquanto você foca no sucesso do cliente.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Assinatura digital de contratos integrada',
      'Criação automática de acessos e logins',
      'Réguas de comunicação multicanal (Email/WhatsApp)',
      'Coleta de dados via formulários dinâmicos'
    ],
    advantages: [
      'Redução de 70% no tempo de ativação',
      'Experiência premium desde o dia 1',
      'Escalabilidade operacional imediata'
    ],
    targetAudience: 'SaaS, Agências e Assessorias com alto volume de novos clientes mensalmente.',
    workflow: [
      { step: 'Cadastro', description: 'Cliente preenche dados iniciais de forma guiada e fluida.' },
      { step: 'Contrato', description: 'Geração e envio automático via Zapier/Webhooks para assinatura.' },
      { step: 'Acesso', description: 'Provisionamento instantâneo de ferramentas e painéis.' },
      { step: 'Comunicação', description: 'Boas-vindas e treinamento automatizado via WhatsApp.' }
    ]
  },
  {
    id: '3',
    slug: 'automacoes-cobranca',
    title: 'Automação de Cobrança',
    headline: 'Recupere sua receita sem desgastes na relação',
    painPoint: 'Atrasos no pagamento e falta de controle financeiro sufocam o caixa da empresa.',
    description: 'Sistema inteligente que monitora pagamentos e executa uma régua de cobrança humanizada e persistente.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Alertas pré-vencimento inteligentes',
      'Lembretes automáticos multicanal personalizados',
      'Link de pagamento direto e segunda via de boleto',
      'Registro automático e conciliação bancária'
    ],
    advantages: [
      'Redução da inadimplência em até 40%',
      'Time financeiro focado em estratégia, não em ligações',
      'Comunicação profissional que preserva o cliente'
    ],
    targetAudience: 'Empresas com faturamento recorrente (SaaS, Escolas, Contabilidades).',
    workflow: [
      { step: 'Alerta', description: 'Lembrete preventivo dias antes do vencimento.' },
      { step: 'Lembrete', description: 'Notificação amigável no dia exato do vencimento.' },
      { step: 'Cobrança', description: 'Fluxo escalonado de mensagens pós-atraso.' },
      { step: 'Registro', description: 'Atualização automática do status financeiro no sistema.' }
    ]
  },
  {
    id: '4',
    slug: 'apps-sob-demanda',
    title: 'Apps Sob Demanda',
    headline: 'Sua ideia transformada em um produto digital escalável',
    painPoint: 'Softwares engessados não atendem às necessidades específicas do seu modelo de negócio.',
    description: 'Desenvolvimento de aplicações mobile e web exclusivas, criadas do zero para resolver seu problema específico.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Design UI/UX focado em conversão',
      'Arquitetura Cloud nativa (AWS/Google Cloud)',
      'Ecossistema de APIs documentado',
      'Suporte a Android e iOS nativos ou híbridos'
    ],
    advantages: [
      'Propriedade intelectual total do seu código',
      'Integração nativa com seus sistemas atuais',
      'Performance superior a soluções "no-code"'
    ],
    targetAudience: 'Empresas que precisam de uma ferramenta única que não existe no mercado.'
  },
  {
    id: '5',
    slug: 'sites-sob-demanda',
    title: 'Sites de Alta Performance',
    headline: 'Sua vitrine digital focada em conversão de leads',
    painPoint: 'Sites lentos e sem estratégia custam caro e não geram resultados reais.',
    description: 'Landing pages e portais institucionais desenvolvidos com as tecnologias mais rápidas do mundo.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Otimização Core Web Vitals (Google)',
      'Design adaptativo e Mobile-First',
      'Integração com CRMs e ferramentas de Tracking',
      'Certificados de Segurança SSL inclusos'
    ],
    advantages: [
      'Tempo de carregamento abaixo de 1.5s',
      'Autoridade de marca imediata',
      'Pronto para campanhas de tráfego pago'
    ],
    targetAudience: 'Negócios que querem transformar o site em uma máquina de vendas.'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Comercial',
    question: 'Como funciona o processo de contratação?',
    answer: 'Iniciamos com uma reunião de diagnóstico gratuita. Após entender suas dores, apresentamos uma proposta personalizada com escopo e prazos definidos.'
  },
  {
    category: 'Produtos',
    question: 'Os sistemas são integrados?',
    answer: 'Sim! Nossas soluções são modulares e podem ser integradas via API com as ferramentas que você já utiliza no dia a dia.'
  },
  {
    category: 'Suporte',
    question: 'Qual o SLA de atendimento do suporte?',
    answer: 'Para chamados críticos, nosso SLA é de até 4 horas úteis. Para demais solicitações, o retorno ocorre em no máximo 24 horas.'
  },
  {
    category: 'Automações',
    question: 'É seguro automatizar as cobranças da minha empresa?',
    answer: 'Totalmente. Utilizamos protocolos de segurança bancária e comunicação humanizada para garantir que o processo seja eficiente e profissional.'
  }
];
