import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { IntegranteProps } from '../../types/User';

const GitHubIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const ArrowLeftIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const IntegranteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [integrante, setIntegrante] = useState<IntegranteProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const integrantes: IntegranteProps[] = [
        {
          id: '1',
          nome: 'Gabriel Martins',
          rm: '562194',
          turma: '1TDSPG',
          funcao: 'Dev Back-End',
          imgUrl: '/assets/img/gabriel.jpg',
          githubUrl: 'https://github.com/ggabmartins',
          linkedinUrl: 'https://www.linkedin.com/in/gabriel-lourenço-5a4280353/',
          bio: 'Desenvolvedor back-end especializado em Node.js e TypeScript. Apaixonado por criar soluções escaláveis e eficientes.'
        },
        {
          id: '2',
          nome: 'Orlando Gonçalves',
          rm: '561584',
          turma: '1TDSPG',
          funcao: 'Dev Back-End',
          imgUrl: '/assets/img/orlando.png',
          githubUrl: 'https://github.com/orlando-IDA',
          linkedinUrl: 'https://www.linkedin.com/in/orlando-gonçalves-de-arruda-934078236/',
          bio: 'Desenvolvedor full-stack com foco em React e Python. Comprometido com qualidade de código e boas práticas.'
        }
      ];

      const foundIntegrante = integrantes.find(i => i.id === id);
      setIntegrante(foundIntegrante || null);
      setLoading(false);

      if (foundIntegrante) {
        document.title = `HC Fácil - ${foundIntegrante.nome}`;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando informações...</p>
        </div>
      </div>
    );
  }

  if (!integrante) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Integrante não encontrado</h1>
          <button 
            onClick={() => navigate('/integrantes')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voltar para Integrantes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
        >
          <ArrowLeftIcon />
          Voltar
        </button>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 p-8 flex flex-col items-center justify-center">
              <img 
                src={integrante.imgUrl} 
                alt={integrante.nome}
                className="w-48 h-48 rounded-full border-4 border-white shadow-lg mb-6"
              />
              <h1 className="text-3xl font-bold text-white text-center mb-2">{integrante.nome}</h1>
              <p className="text-blue-100 text-lg text-center">{integrante.funcao}</p>
            </div>

            <div className="md:w-2/3 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">RM</h3>
                  <p className="text-2xl font-bold text-gray-900">{integrante.rm}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Turma</h3>
                  <p className="text-2xl font-bold text-gray-900">{integrante.turma}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Biografia</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{integrante.bio}</p>
              </div>

              <div className="flex justify-center gap-6 pt-6 border-t border-gray-200">
                <a 
                  href={integrante.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                >
                  <GitHubIcon className="text-2xl text-white" />
                </a>
                <a 
                  href={integrante.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                >
                  <LinkedInIcon className="text-2xl text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegranteDetail;