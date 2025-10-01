import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import type { IntegranteProps } from '../../types/User'; // Ajuste o caminho conforme necessário

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

  // ... o restante do componente permanece igual
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
          <i className="fa-solid fa-arrow-left"></i>
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
                  <i className="fa-brands fa-github text-2xl text-white"></i>
                </a>
                <a 
                  href={integrante.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                >
                  <i className="fa-brands fa-linkedin text-2xl text-white"></i>
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