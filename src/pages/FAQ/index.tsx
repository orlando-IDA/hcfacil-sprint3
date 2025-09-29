import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const faqData = [
  {
    question: 'Onde estão os vídeos?',
    answer: 'Basta acessar a página principal (clique na nossa logo no topo da página) e clicar na aba de vídeos.'
  },
  {
    question: 'Como faço meu cadastro?',
    answer: (
      <>
        Acesse o Portal do <a href="https://portaldopaciente.hc.fm.usp.br/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Paciente do HC</a> ou para maiores explicações, clique na nossa logo e vá em cadastro.
      </>
    )
  },
  {
    question: 'Quem criou essa plataforma?',
    answer: 'Clique na aba de "INTEGRANTES" no menu no topo da página para conhecer a equipe.'
  },
  {
    question: 'Quais são os contatos da HC?',
    answer: 'Clique na aba de "CONTATO" no menu no topo da página para ver os telefones e e-mail.'
  },
  {
    question: 'Onde vejo minhas consultas marcadas?',
    answer: (
      <>
        Acesse a aba de "Minhas Agendas" no portal oficial ou clique <a href="https://portaldopaciente.hc.fm.usp.br/agendamentos" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">aqui</a> para ser redirecionado.
      </>
    )
  },
  {
    question: 'Como mudar minha senha?',
    answer: 'Clique na nossa logo e acesse a aba de "Esqueci a minha senha" no portal oficial.'
  }
];

const FaqItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300/50 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none hover:text-blue-700 transition-colors duration-300"
      >
        <span className="pr-4">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`mt-3 text-gray-700 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FaqPage = () => {
  return (
    <main className="relative min-h-screen bg-gray-50">
      <div className="fixed inset-0 z-0 bg-[url('/assets/img/img-faq.svg')] bg-contain md:bg-auto bg-center bg-no-repeat opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre nossa plataforma
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20">
            {faqData.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>

          <div className="text-center mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Não encontrou o que procurava?
            </h2>
            <p className="text-gray-700 mb-6">
              Entre em contato conosco através da nossa página de contato
            </p>
            <NavLink 
              to="/contato" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Ir para Contato
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FaqPage;