
import React from 'react';

const faqData = [
 {
    question: 'Onde estão os vídeos?',
    answer: 'Basta acessar a página principal (clique na nossa logo no topo da página) e clicar na aba de vídeos.'
  },
  {
    question: 'Como faço meu cadastro?',
    answer: 'Acesse o Portal do Paciente do HC ou para maiores explicações, clique na nossa logo e vá em cadastro.'
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
    answer: 'Acesse a aba de "Minhas Agendas" no portal oficial.'
  },
  {
    question: 'Como mudar minha senha?',
    answer: 'Clique na nossa logo e acesse a aba de "Esqueci a minha senha" no portal oficial.'
  }
];


const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800">
        <span>{question}</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="mt-3 text-gray-600">
        <p>{answer}</p>
      </div>
    </div>
  );
};

// --- Componente Principal da Página FAQ ---
const FaqPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Perguntas Frequentes (FAQ)
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer as string} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FaqPage;