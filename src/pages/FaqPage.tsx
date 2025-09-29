import React, { useState } from 'react';

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
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-3 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqPage = () => {
  return (
    <main className="relative container mx-auto px-4 py-8">
     
     <div className="fixed inset-0 z-[-1] bg-[url('/assets/img/img-faq.svg')] bg-[length:75%] bg-center bg-no-repeat opacity-40"></div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Perguntas Frequentes (FAQ)
        </h1>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-xl">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FaqPage;